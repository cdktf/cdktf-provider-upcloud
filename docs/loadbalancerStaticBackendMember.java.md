# `upcloud_loadbalancer_static_backend_member`

Refer to the Terraform Registory for docs: [`upcloud_loadbalancer_static_backend_member`](https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member).

# `loadbalancerStaticBackendMember` Submodule <a name="`loadbalancerStaticBackendMember` Submodule" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerStaticBackendMember <a name="LoadbalancerStaticBackendMember" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member upcloud_loadbalancer_static_backend_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_static_backend_member.LoadbalancerStaticBackendMember;

LoadbalancerStaticBackendMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backend(java.lang.String)
    .ip(java.lang.String)
    .maxSessions(java.lang.Number)
    .name(java.lang.String)
    .port(java.lang.Number)
    .weight(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | ID of the load balancer backend to which the member is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.ip">ip</a></code> | <code>java.lang.String</code> | Server IP address in the customer private network. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.maxSessions">maxSessions</a></code> | <code>java.lang.Number</code> | Maximum number of sessions before queueing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the member must be unique within the load balancer backend service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Server port. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.weight">weight</a></code> | <code>java.lang.Number</code> | Used to adjust the server's weight relative to other servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the member is enabled. Disabled members are excluded from load balancing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#id LoadbalancerStaticBackendMember#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

ID of the load balancer backend to which the member is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#backend LoadbalancerStaticBackendMember#backend}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.ip"></a>

- *Type:* java.lang.String

Server IP address in the customer private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#ip LoadbalancerStaticBackendMember#ip}

---

##### `maxSessions`<sup>Required</sup> <a name="maxSessions" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.maxSessions"></a>

- *Type:* java.lang.Number

Maximum number of sessions before queueing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#max_sessions LoadbalancerStaticBackendMember#max_sessions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the member must be unique within the load balancer backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#name LoadbalancerStaticBackendMember#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Server port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#port LoadbalancerStaticBackendMember#port}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.weight"></a>

- *Type:* java.lang.Number

Used to adjust the server's weight relative to other servers.

All servers will receive a load proportional to their weight relative to the sum of all weights, so the higher the weight, the higher the load.
A value of 0 means the server will not participate in load balancing but will still accept persistent connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#weight LoadbalancerStaticBackendMember#weight}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the member is enabled. Disabled members are excluded from load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#enabled LoadbalancerStaticBackendMember#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#id LoadbalancerStaticBackendMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_static_backend_member.LoadbalancerStaticBackendMember;

LoadbalancerStaticBackendMember.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_static_backend_member.LoadbalancerStaticBackendMember;

LoadbalancerStaticBackendMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_static_backend_member.LoadbalancerStaticBackendMember;

LoadbalancerStaticBackendMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessionsInput">maxSessionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessions">maxSessions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `maxSessionsInput`<sup>Optional</sup> <a name="maxSessionsInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessionsInput"></a>

```java
public java.lang.Number getMaxSessionsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `maxSessions`<sup>Required</sup> <a name="maxSessions" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessions"></a>

```java
public java.lang.Number getMaxSessions();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerStaticBackendMemberConfig <a name="LoadbalancerStaticBackendMemberConfig" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_static_backend_member.LoadbalancerStaticBackendMemberConfig;

LoadbalancerStaticBackendMemberConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backend(java.lang.String)
    .ip(java.lang.String)
    .maxSessions(java.lang.Number)
    .name(java.lang.String)
    .port(java.lang.Number)
    .weight(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | ID of the load balancer backend to which the member is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.ip">ip</a></code> | <code>java.lang.String</code> | Server IP address in the customer private network. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.maxSessions">maxSessions</a></code> | <code>java.lang.Number</code> | Maximum number of sessions before queueing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the member must be unique within the load balancer backend service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Server port. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | Used to adjust the server's weight relative to other servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the member is enabled. Disabled members are excluded from load balancing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#id LoadbalancerStaticBackendMember#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

ID of the load balancer backend to which the member is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#backend LoadbalancerStaticBackendMember#backend}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

Server IP address in the customer private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#ip LoadbalancerStaticBackendMember#ip}

---

##### `maxSessions`<sup>Required</sup> <a name="maxSessions" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.maxSessions"></a>

```java
public java.lang.Number getMaxSessions();
```

- *Type:* java.lang.Number

Maximum number of sessions before queueing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#max_sessions LoadbalancerStaticBackendMember#max_sessions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the member must be unique within the load balancer backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#name LoadbalancerStaticBackendMember#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Server port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#port LoadbalancerStaticBackendMember#port}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Used to adjust the server's weight relative to other servers.

All servers will receive a load proportional to their weight relative to the sum of all weights, so the higher the weight, the higher the load.
A value of 0 means the server will not participate in load balancing but will still accept persistent connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#weight LoadbalancerStaticBackendMember#weight}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the member is enabled. Disabled members are excluded from load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#enabled LoadbalancerStaticBackendMember#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_static_backend_member#id LoadbalancerStaticBackendMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



