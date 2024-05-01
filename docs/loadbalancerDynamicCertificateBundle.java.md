# `loadbalancerDynamicCertificateBundle` Submodule <a name="`loadbalancerDynamicCertificateBundle` Submodule" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerDynamicCertificateBundle <a name="LoadbalancerDynamicCertificateBundle" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle upcloud_loadbalancer_dynamic_certificate_bundle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_dynamic_certificate_bundle.LoadbalancerDynamicCertificateBundle;

LoadbalancerDynamicCertificateBundle.Builder.create(Construct scope, java.lang.String id)
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
    .hostnames(java.util.List<java.lang.String>)
    .keyType(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Certificate hostnames. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | Private key type (`rsa` / `ecdsa`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the bundle must be unique within customer account. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#id LoadbalancerDynamicCertificateBundle#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.hostnames"></a>

- *Type:* java.util.List<java.lang.String>

Certificate hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#hostnames LoadbalancerDynamicCertificateBundle#hostnames}

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

Private key type (`rsa` / `ecdsa`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#key_type LoadbalancerDynamicCertificateBundle#key_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the bundle must be unique within customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#name LoadbalancerDynamicCertificateBundle#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#id LoadbalancerDynamicCertificateBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerDynamicCertificateBundle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_dynamic_certificate_bundle.LoadbalancerDynamicCertificateBundle;

LoadbalancerDynamicCertificateBundle.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_dynamic_certificate_bundle.LoadbalancerDynamicCertificateBundle;

LoadbalancerDynamicCertificateBundle.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_dynamic_certificate_bundle.LoadbalancerDynamicCertificateBundle;

LoadbalancerDynamicCertificateBundle.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_dynamic_certificate_bundle.LoadbalancerDynamicCertificateBundle;

LoadbalancerDynamicCertificateBundle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadbalancerDynamicCertificateBundle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoadbalancerDynamicCertificateBundle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadbalancerDynamicCertificateBundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadbalancerDynamicCertificateBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerDynamicCertificateBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.notAfter">notAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.notBefore">notBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.operationalState">operationalState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.hostnamesInput">hostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.notAfter"></a>

```java
public java.lang.String getNotAfter();
```

- *Type:* java.lang.String

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.notBefore"></a>

```java
public java.lang.String getNotBefore();
```

- *Type:* java.lang.String

---

##### `operationalState`<sup>Required</sup> <a name="operationalState" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.operationalState"></a>

```java
public java.lang.String getOperationalState();
```

- *Type:* java.lang.String

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.hostnamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundle.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerDynamicCertificateBundleConfig <a name="LoadbalancerDynamicCertificateBundleConfig" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_dynamic_certificate_bundle.LoadbalancerDynamicCertificateBundleConfig;

LoadbalancerDynamicCertificateBundleConfig.builder()
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
    .hostnames(java.util.List<java.lang.String>)
    .keyType(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Certificate hostnames. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | Private key type (`rsa` / `ecdsa`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the bundle must be unique within customer account. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#id LoadbalancerDynamicCertificateBundle#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

Certificate hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#hostnames LoadbalancerDynamicCertificateBundle#hostnames}

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

Private key type (`rsa` / `ecdsa`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#key_type LoadbalancerDynamicCertificateBundle#key_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the bundle must be unique within customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#name LoadbalancerDynamicCertificateBundle#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicCertificateBundle.LoadbalancerDynamicCertificateBundleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/loadbalancer_dynamic_certificate_bundle#id LoadbalancerDynamicCertificateBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



