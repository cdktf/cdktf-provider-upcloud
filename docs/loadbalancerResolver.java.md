# `loadbalancerResolver` Submodule <a name="`loadbalancerResolver` Submodule" id="@cdktf/provider-upcloud.loadbalancerResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerResolver <a name="LoadbalancerResolver" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver upcloud_loadbalancer_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_resolver.LoadbalancerResolver;

LoadbalancerResolver.Builder.create(Construct scope, java.lang.String id)
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
    .cacheInvalid(java.lang.Number)
    .cacheValid(java.lang.Number)
    .loadbalancer(java.lang.String)
    .name(java.lang.String)
    .nameservers(java.util.List<java.lang.String>)
    .retries(java.lang.Number)
    .timeout(java.lang.Number)
    .timeoutRetry(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.cacheInvalid">cacheInvalid</a></code> | <code>java.lang.Number</code> | Time in seconds to cache invalid results. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.cacheValid">cacheValid</a></code> | <code>java.lang.Number</code> | Time in seconds to cache valid results. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.loadbalancer">loadbalancer</a></code> | <code>java.lang.String</code> | ID of the load balancer to which the resolver is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the resolver. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.nameservers">nameservers</a></code> | <code>java.util.List<java.lang.String></code> | List of nameserver IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | Number of retries on failure. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Timeout for the query in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.timeoutRetry">timeoutRetry</a></code> | <code>java.lang.Number</code> | Timeout for the query retries in seconds. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cacheInvalid`<sup>Required</sup> <a name="cacheInvalid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.cacheInvalid"></a>

- *Type:* java.lang.Number

Time in seconds to cache invalid results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#cache_invalid LoadbalancerResolver#cache_invalid}

---

##### `cacheValid`<sup>Required</sup> <a name="cacheValid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.cacheValid"></a>

- *Type:* java.lang.Number

Time in seconds to cache valid results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#cache_valid LoadbalancerResolver#cache_valid}

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.loadbalancer"></a>

- *Type:* java.lang.String

ID of the load balancer to which the resolver is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#loadbalancer LoadbalancerResolver#loadbalancer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the resolver. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#name LoadbalancerResolver#name}

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.nameservers"></a>

- *Type:* java.util.List<java.lang.String>

List of nameserver IP addresses.

Nameserver can reside in public internet or in customer private network. Port is optional, if missing then default 53 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#nameservers LoadbalancerResolver#nameservers}

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

Number of retries on failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#retries LoadbalancerResolver#retries}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Timeout for the query in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#timeout LoadbalancerResolver#timeout}

---

##### `timeoutRetry`<sup>Required</sup> <a name="timeoutRetry" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.timeoutRetry"></a>

- *Type:* java.lang.Number

Timeout for the query retries in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#timeout_retry LoadbalancerResolver#timeout_retry}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerResolver resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_resolver.LoadbalancerResolver;

LoadbalancerResolver.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_resolver.LoadbalancerResolver;

LoadbalancerResolver.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_resolver.LoadbalancerResolver;

LoadbalancerResolver.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_resolver.LoadbalancerResolver;

LoadbalancerResolver.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadbalancerResolver.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoadbalancerResolver resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadbalancerResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadbalancerResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalidInput">cacheInvalidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValidInput">cacheValidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancerInput">loadbalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameserversInput">nameserversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetryInput">timeoutRetryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalid">cacheInvalid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValid">cacheValid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancer">loadbalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameservers">nameservers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetry">timeoutRetry</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `cacheInvalidInput`<sup>Optional</sup> <a name="cacheInvalidInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalidInput"></a>

```java
public java.lang.Number getCacheInvalidInput();
```

- *Type:* java.lang.Number

---

##### `cacheValidInput`<sup>Optional</sup> <a name="cacheValidInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValidInput"></a>

```java
public java.lang.Number getCacheValidInput();
```

- *Type:* java.lang.Number

---

##### `loadbalancerInput`<sup>Optional</sup> <a name="loadbalancerInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancerInput"></a>

```java
public java.lang.String getLoadbalancerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameserversInput"></a>

```java
public java.util.List<java.lang.String> getNameserversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `timeoutRetryInput`<sup>Optional</sup> <a name="timeoutRetryInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetryInput"></a>

```java
public java.lang.Number getTimeoutRetryInput();
```

- *Type:* java.lang.Number

---

##### `cacheInvalid`<sup>Required</sup> <a name="cacheInvalid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalid"></a>

```java
public java.lang.Number getCacheInvalid();
```

- *Type:* java.lang.Number

---

##### `cacheValid`<sup>Required</sup> <a name="cacheValid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValid"></a>

```java
public java.lang.Number getCacheValid();
```

- *Type:* java.lang.Number

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancer"></a>

```java
public java.lang.String getLoadbalancer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameservers"></a>

```java
public java.util.List<java.lang.String> getNameservers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `timeoutRetry`<sup>Required</sup> <a name="timeoutRetry" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetry"></a>

```java
public java.lang.Number getTimeoutRetry();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerResolverConfig <a name="LoadbalancerResolverConfig" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_resolver.LoadbalancerResolverConfig;

LoadbalancerResolverConfig.builder()
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
    .cacheInvalid(java.lang.Number)
    .cacheValid(java.lang.Number)
    .loadbalancer(java.lang.String)
    .name(java.lang.String)
    .nameservers(java.util.List<java.lang.String>)
    .retries(java.lang.Number)
    .timeout(java.lang.Number)
    .timeoutRetry(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheInvalid">cacheInvalid</a></code> | <code>java.lang.Number</code> | Time in seconds to cache invalid results. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheValid">cacheValid</a></code> | <code>java.lang.Number</code> | Time in seconds to cache valid results. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.loadbalancer">loadbalancer</a></code> | <code>java.lang.String</code> | ID of the load balancer to which the resolver is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the resolver. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.nameservers">nameservers</a></code> | <code>java.util.List<java.lang.String></code> | List of nameserver IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | Number of retries on failure. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Timeout for the query in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeoutRetry">timeoutRetry</a></code> | <code>java.lang.Number</code> | Timeout for the query retries in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cacheInvalid`<sup>Required</sup> <a name="cacheInvalid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheInvalid"></a>

```java
public java.lang.Number getCacheInvalid();
```

- *Type:* java.lang.Number

Time in seconds to cache invalid results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#cache_invalid LoadbalancerResolver#cache_invalid}

---

##### `cacheValid`<sup>Required</sup> <a name="cacheValid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheValid"></a>

```java
public java.lang.Number getCacheValid();
```

- *Type:* java.lang.Number

Time in seconds to cache valid results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#cache_valid LoadbalancerResolver#cache_valid}

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.loadbalancer"></a>

```java
public java.lang.String getLoadbalancer();
```

- *Type:* java.lang.String

ID of the load balancer to which the resolver is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#loadbalancer LoadbalancerResolver#loadbalancer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the resolver. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#name LoadbalancerResolver#name}

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.nameservers"></a>

```java
public java.util.List<java.lang.String> getNameservers();
```

- *Type:* java.util.List<java.lang.String>

List of nameserver IP addresses.

Nameserver can reside in public internet or in customer private network. Port is optional, if missing then default 53 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#nameservers LoadbalancerResolver#nameservers}

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

Number of retries on failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#retries LoadbalancerResolver#retries}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Timeout for the query in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#timeout LoadbalancerResolver#timeout}

---

##### `timeoutRetry`<sup>Required</sup> <a name="timeoutRetry" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeoutRetry"></a>

```java
public java.lang.Number getTimeoutRetry();
```

- *Type:* java.lang.Number

Timeout for the query retries in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_resolver#timeout_retry LoadbalancerResolver#timeout_retry}

---



